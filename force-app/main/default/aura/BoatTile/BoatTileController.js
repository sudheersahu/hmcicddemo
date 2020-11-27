({
    onBoatClick : function(component, event, helper) {
        var boat = component.get("v.boat");
      var selectEvent =  component.getEvent("BoatSelect");
           selectEvent.setParams({
            "boatId": {
                "boatId" : boat.Id
              }
           })
         selectEvent.fire();

         var selectedEvent = $A.get("e.c:BoatSelected");
         selectedEvent.setParam("boat", boat);
            
         selectedEvent.fire();

         var mapEvent = $A.get("e.c:PlotMapMarker");
         mapEvent.setParams({
          "lat"   : boat.Geolocation__Latitude__s,
          "long"  : boat.Geolocation__Longitude__s,
          "label" : boat.Name,
          "SObjectId" : boat.Id});
         mapEvent.fire();
    },

})
