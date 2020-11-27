public with sharing class BoatReviews {
    public BoatReviews() {

    }

    @AuraEnabled
    public static List<BoatReview__c> getAll(String boatId){

        return [SELECT Id,Name,Comment__c,Rating__c,
        LastModifiedDate,
        CreatedDate,
        CreatedBy.Name,
        CreatedBy.SmallPhotoUrl,
        CreatedBy.CompanyName from BoatReview__c WHERE Boat__c = :boatId ];
    }
}
