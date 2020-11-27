({
    doInit : function(component, event, helper) {
component.set("v.newButtonDisabled", $A.get("e.force:createRecord"));
helper.getBoatTypes(component);
    },

    newBoat : function(component,event, helper){
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Boat__c"
        });

        if(! component.find("select").get("v.value") == '' ) {
            createRecordEvent.setParams({
                "defaultFieldValues" : {
                    'BoatType__c' : component.find("select").get("v.value")
                }  
            })    
        }

        createRecordEvent.fire();
    },

    handleChange: function(component,event,helper){
        component.set("v.boatTypeId", component.find("select").get("v.value"));
    },

    onFormSubmit: function(component,event,helper){
       var boatTypeId = component.get("v.boatTypeId");
       var updateEvent = component.getEvent("formsubmit");
       updateEvent.setParams({
        "formData": {
            "boatTypeId" : boatTypeId
          }
       })
       updateEvent.fire();
    }
})
