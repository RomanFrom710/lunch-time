import { BrowserWindowService, MockWindowService } from './';

const testObject = {
    a: 5,
    nested: {
        a: 7
    },
    b: 5.5,
    c: 'some string'
};
const key = 'object-key';

describe('BrowserWindow service', () => {
    const windowService = new BrowserWindowService();

    it ('should save storage values', () => {
        windowService.setStorageValue(key, testObject);
        const objectFromStorage = windowService.getStorageValue(key);
        expect(objectFromStorage).toEqual(testObject);
    });
});

describe('MockWindow service', () => {
    const windowService = new MockWindowService();

    it ('should save storage values', () => {
        windowService.setStorageValue(key, testObject);
        const objectFromStorage = windowService.getStorageValue(key);
        expect(objectFromStorage).toEqual(testObject);
    });
});

