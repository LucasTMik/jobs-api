module.exports = class Table {
    constructor() {
        this.items = [];
        this.gratterId = -1;
    }

    addItem(newItem) {
        this.items.push({
            id: ++this.gratterId,
            ...newItem
        });
        return this.items;
    }

    removeItem(itemId) {
        for(let i = 0; i< this.items.length; i++) {
            if (this.items[i].id == itemId) {
                this.items.splice(i, 1);
                return { message: "OK", status: 200 };
            }
            break;
        }
        return { message: "not found", status: 404 };
    }

    findWhere(param, value) {
        return this.items.filter(( element ) => {
            return element[param] == value;
        });
    }

    find() {
        return this.items;
    }
}
