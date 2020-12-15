
public with sharing class BoatController {

    public BoatController() {
      System.debug('in controller');
    }

    @AuraEnabled
    public static List<BoatType__c> getBoatRecords(){
        return [SELECT Name FROM BoatType__c ];
    }
  
}
