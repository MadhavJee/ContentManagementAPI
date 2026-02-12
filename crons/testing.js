import cron from 'node-cron';

export const testing = () => {
    console.log("Testing function schedule")
    cron.schedule('26 15 * * *', () => {
        console.log('Running a task every day at 7:15 PM');
    })
        
};