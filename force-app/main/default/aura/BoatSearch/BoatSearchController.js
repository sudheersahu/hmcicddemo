({
    onFormSubmit : function(component, event, helper) {
         var updateSelected =   event.getParam("formData");
           var childComponent = component.find('childComponent');
           childComponent.search(updateSelected.boatTypeId);
    }
})
