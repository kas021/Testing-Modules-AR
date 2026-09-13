import Foundation
import VireoCore

struct DiscoveryFixture: HTTPTransport {
    func execute(_ request: URLRequest, redirectPolicy: RedirectPolicy, maxResponseBytes: Int) async throws -> TransportResponse {
        let html = """
        <a href="/anime/stream/naruto"><img src="data:image/png;base64,AA" data-src="/public/naruto.jpg"><h3>Naruto</h3></a>
        <a href="/anime/stream/naruto/staffel-1"><img data-src="/public/season.jpg"><h3>Season</h3></a>
        <a href="/anime/stream/naruto/staffel-1/episode-1"><img data-src="/public/episode.jpg"><h3>Episode</h3></a>
        <a href="/anime/stream/menu-only">Navigation</a>
        """
        return TransportResponse(data: Data(html.utf8), statusCode: 200, finalURL: request.url!, headers: ["content-type":"text/html"])
    }
}

@main struct DiscoveryProbe {
    static func main() async throws {
        let path = CommandLine.arguments[1]
        let fixture = CommandLine.arguments.contains("--fixture")
        let manifest = try ConnectorValidator.validate(manifestData: Data(contentsOf: URL(fileURLWithPath: path)))
        let transport: any HTTPTransport = fixture ? DiscoveryFixture() : URLSessionTransport(timeoutSeconds: 15)
        let engine = ConnectorEngine(manifest: manifest, transport: transport, retryDelays: [])
        let sections = try await engine.loadDiscovery()
        let items = sections.flatMap(\.items)
        if fixture {
            precondition(items.count == 1, "Expected exactly one series, excluding seasons, episodes and menu links")
            precondition(items[0].sourceID == "naruto")
            precondition(items[0].posterURL?.absoluteString == "https://aniworld.to/public/naruto.jpg")
            precondition(items[0].title == "Naruto")
        }
        let row: [String: Any] = ["id":manifest.id, "version":manifest.version.description,
            "fixture":fixture, "sections":sections.map { ["id":$0.id, "count":$0.items.count] },
            "itemCount":items.count, "posterCount":items.filter { $0.posterURL != nil }.count,
            "sample":items.prefix(3).map { ["id":$0.sourceID,"title":$0.title] }]
        print(String(decoding: try JSONSerialization.data(withJSONObject: row, options: [.sortedKeys]), as: UTF8.self))
        guard !items.isEmpty else { throw NSError(domain:"DiscoveryProbe", code:1, userInfo:[NSLocalizedDescriptionKey:"Empty discovery feed"]) }
    }
}
