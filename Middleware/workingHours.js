function workingHoursMiddleware(req, res, next) {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();
    
    // Check if it's working hours (Monday to Friday, 9 to 17)
    const isWorkingHours = (day >= 1 && day <= 5) && (hour >= 9 && hour < 17);
    
    if (isWorkingHours) {
        next(); // Continue to the requested page
    } else {
        // Send the closed page
        res.sendFile(require('path').join(__dirname, '../views', 'closed.html'));
    }
}

module.exports = workingHoursMiddleware;
