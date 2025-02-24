module.exports = {
    /**
     * Returns back some attributes based on whether the
     * links is active or a parent of an active item
     *
     * @params {String} itemUrl The link in question
     * @params {String} pageUrl The page context
     * @returns {String} The attributes or empty
     * */

    getLinkActiveState(itemUrl, pageUrl) {
        let response = '';

        if(itemUrl === pageUrl) {
            response = 'aria-current="page"'
        }

        if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
            response += ' data-state="active"'
        }

        return response;
    }
}