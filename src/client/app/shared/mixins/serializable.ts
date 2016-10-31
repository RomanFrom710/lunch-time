export class Serializable { // todo: support nested objects
    fromData(data: any) : this {
        for (let key in data) {
            const shouldBeCopied = data.hasOwnProperty(key)&&
                Object.getOwnPropertyDescriptor(data, key).get &&
                Object.getOwnPropertyDescriptor(this, key).set;

            if (shouldBeCopied) {
                this[key] = data[key];
            }
        }

        return this;
    }
}
