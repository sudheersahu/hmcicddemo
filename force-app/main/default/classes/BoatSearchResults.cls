public with sharing class BoatSearchResults {
    public BoatSearchResults() {

    }

    @AuraEnabled
   public static List<Boat__c> getBoats(String boatTypeId){
      List<Boat__c> boatList = new List<Boat__c>();
      if(boatTypeId == null || boatTypeId == ''){
        boatList = [SELECT Name, Picture__c FROM Boat__c ];
       }else{
        boatList = [SELECT Name, Picture__c FROM Boat__c where BoatType__c = : boatTypeId];
       }

       return boatList;
   }
}
