
export interface JsonDataModel {
    testDetails: TestDetails
    cookieValue: string
    travelEligible: string
    travellers: Travellers
    tripDetails: TripDetails
    medicalConditions: MedicalConditions
    tripOptions: TripOptions
    sportsOptions: SportsOptions
    contactDetails: ContactDetails
    paymentDetails: PaymentDetails
    coverOptions: CoverOptions
  }
  
  export interface TestDetails {
    testId: string
    testName: string
  }
  
  export interface Travellers {
    policyHolder: PolicyHolder
    addTravellers: [AdditionalTraveller]
    guardian: Guardian
  }
  
  export interface PolicyHolder {
    title: string
    firstName: string
    lastName: string
    dob: string
  }
  
  export interface AdditionalTraveller {
    title: string
    firstName: string
    lastName: string
    dob: string
  }
  export interface Guardian {
    title: string
    firstName: string
    lastName: string
    dob: string
  }
  
  export interface TripDetails {
    tripType: string
    singleTripInfo: SingleTripInfo
    annualTripInfo: AnnualTripInfo
  }
  export interface SingleTripInfo {
    countries: [string]
    startDate: string
    endDate: string
  }
  export interface AnnualTripInfo {
    region: string
    startDate: string
    duration: string
  }
  
  export interface MedicalConditions {
    declaringMedicalConditions: string
    medicalScreening: [MedicalScreeing]
  }
  export interface MedicalScreeing{
    doesMedicalConditionsPreExist:string
    medicalCondition: string
    medicalQuestionaire: [MedicalQuestionaire]
  }
  
  export interface MedicalQuestionaire{
    question: string
    answer:string
  }
  
  export interface TripOptions {
    cruiseCover: string
    winterSportsCover: string
    golfCover: string
  }
  
  export interface SportsOptions {
    sportsOptions: any
  }
  
  export interface ContactDetails {
    email: string
    postCode: string
    selectIndex: number
    addressLine1: string
    addressLine2: string
    town: string
    country: string
    phone: any
  }
  
  export interface PaymentDetails {
    cardName: string
    cardNumber: string
    expiryMonth: string
    expiryYear: string
    cvc: string
  }
  
  export interface CoverOptions {
    coverLevel: string
  }
  