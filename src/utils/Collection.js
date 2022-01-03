/**
 * Holds many objects
 * @extends Map
 * @returns {Collection} A Collection of objects
 */
module.exports = class Collection extends Map {
    /**
     * @property {Class} baseClass The base class
     */
    constructor(baseClass) {
        super();
        this.baseClass = baseClass;
    }

    /**
    * Update an object
    * @param {Object} obj The updated object data
    * @returns {Object} The updated object
    */
    update(obj) {
        const item = this.get(obj.id);
        item.update(obj);
        return item;
    }

    /**
     * Add an object
     * @param {Object} obj The object
     * @returns {Object} Existing or new object
     */
    add(obj) {
        const existing = this.get(obj.id);
        if(existing) {
            return existing;
        }
        this.set(obj.id, obj);
        return obj;
    }

    /**
     * Returns first object found
     * @param {function} func A function that results true or false
     * @returns {Object | null} First matching object or null
     */
    find(func) {
        for(const item of this) {
            if(func(item[0])) {
                return item[0];
            }
        }
        return null;
    }

    /**
    * Remove an object
    * @param {Object} obj The object
    * @param {String} obj.id The object ID
    * @returns {Object | null} The removed object or null if nothing was removed
    */
    remove(obj) {
        const item = this.get(obj.id);
        if(!item) {
            return null;
        }
        this.delete(obj.id);
        return item;
    }
};
