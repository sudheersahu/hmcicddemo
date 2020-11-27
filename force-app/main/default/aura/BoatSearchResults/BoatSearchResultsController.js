({
    doInit: function (component, event, helper) {

        helper.onsearch(component);
    },

    doSearch: function (component, event, helper) {
        var params = event.getParam('arguments');
        if (params) {
            var boatTypeId = params.boatTypeId;
            component.set("v.boatTypeId", boatTypeId); // setting the value from the method to the attribute on the component
            helper.onsearch(component);
        }
    },

    onBoatSelect: function (component, event, helper) {
        var params = event.getParam('arguments');
        if (params) {
            var boatId = params.boatId;
            component.set("v.selectedBoatId", boatId);
        }
    }
})
