import moment from 'moment';
export class Utils {
    //Its for all grids
    public static pageSize = 10;

    //Genreate months for the given period
    //pass start and end date to generate months
    //Start Date is mandatory and (End date or No Of months), No of Months is precedence
    public static generateMonthlyData(start_date: string, end_date: string, no_of_months: number) {
        const startDate = moment(start_date);
        var endDate = moment(end_date);
        if (no_of_months > 0) {
            endDate = moment(startDate).add(no_of_months - 1, 'month');
        }
        const months = [];
        var index = 0;
        // Generate months between start and end date
        while (startDate.isBefore(endDate) || startDate.isSame(endDate, 'month')) {
            index++;
            let dateObj = { field: startDate.format('MMMYY'), name: startDate.format('MMM-YY'), value: index }
            months.push(dateObj);
            startDate.add(1, 'month');
        }
        return months;
    }
}