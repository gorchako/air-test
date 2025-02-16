export async function callMockApi (ms: number) {
    await new Promise(resolve => setTimeout(resolve, ms));
}