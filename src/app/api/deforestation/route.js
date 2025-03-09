export async function GET() {
    const data = [
        [38.736946, -9.142685, 0.8], // Lisbon
        [41.157944, -8.629105, 0.6], // Porto
        [37.0194, -7.9304, 0.4],     // Faro
    ];

    return Response.json(data);
}
