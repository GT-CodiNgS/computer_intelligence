export class CountDTO{
  startDate:string;
  count:string;
  countryCode:string;
  isExcludeWeekends:boolean;
  isExcludeHolidays:boolean;

  constructor(startDate: string, count: string, countryCode: string, isExcludeWeekends: boolean, isExcludeHolidays: boolean) {
    this.startDate = startDate;
    this.count = count;
    this.countryCode = countryCode;
    this.isExcludeWeekends = isExcludeWeekends;
    this.isExcludeHolidays = isExcludeHolidays;
  }
}
