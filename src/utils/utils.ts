export const generateId = (length: number = 8): string => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// export const MAX_IMAGE_SIZE = 1024 * 1024 * 2; // 1 MB
export const MAX_IMAGE_SIZE = 1024 * 1024; // 1 MB



