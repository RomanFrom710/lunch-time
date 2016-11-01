export class Serializable { // todo: support nested objects
    fromData(data: any) : this {
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                this[key] = data[key];
            }
        }

        return this;
    }
}
