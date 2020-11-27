({
    doInit : function(component, event, helper) {
    helper.onInit(component,event,helper);
    },
    onUserInfoClick: function(component, event, helper){
        var userId = event.currentTarget.getAttribute("data-userid");
        var navEvent = $A.get("e.force:navigateToSobject");
        navEvent.setParams({
            "recordId" : userId
        })
       navEvent.fire();
    }
})
