({
  onBoatSelected: function (component, event, helper) {
    // gets the param of the event
    var updateSelected = event.getParam("boat");
        
    // sets the id on the id attribute
    component.set("v.Id", updateSelected.Id);
    component.set("v.boat", updateSelected);
    
    // reloads the current record (reload by the id)
    var currentRecord = component.find("service");
    currentRecord.set("v.Id", updateSelected.Id);
    currentRecord.reloadRecord();

  },
  onBoatReviewAdded : function(component, event, helper){
    component.find("tabs").set("v.selectedTabId", "boatreviewtab");
    var reviewcomponent = component.find('reviewcomponent');
    reviewcomponent.refresh();
  },
  // created during challenge 6, not yet used
  onRecordUpdated : function(component, event, helper) {
    var reviewcomponent = component.find('reviewcomponent');
    if(typeof reviewcomponent != 'undefined'){
    reviewcomponent.refresh();
    }
   
}
})
