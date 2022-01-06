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
     * Add an object
     * @param {Object} obj The object
     * @returns {Object} Existing or new object
     */
    add(obj, id) {
        this.set(id, obj);
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
    * @param {String} id The object ID
    * @returns {Object | null} The removed object or null if nothing was removed
    */
    remove(id) {
        const item = this.get(id);
        if(!item) {
            return null;
        }
        this.delete(id);
        return item;
    }
};
