export function encodeSitemapUrl(url: string) {
    // First URL encode the string
    const urlEncoded = encodeURIComponent(url);
    
    // Then XML escape any remaining special characters
    return urlEncoded
        .replace(/&/g, '&amp;')
        .replace(/'/g, '&apos;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}