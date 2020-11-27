({
    onsearch : function(component) {
        var action = component.get("c.getBoats");
        action.setParams({
            "boatTypeId": component.get("v.boatTypeId")
        });

          action.setCallback(this, function(response){
               var state = response.getState();
               if(state === "SUCCESS"){
                   component.set("v.boats", response.getReturnValue())
               }else if(state === "ERROR"){
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message);
                    }
                }
               }

          })
          $A.enqueueAction(action);
    }
})
