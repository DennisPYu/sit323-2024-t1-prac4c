const express = require('express');
const app = express();
//--------------------------------4.1p task code--------------------------------
// Addition 
app.get('/add', (req, res) => {
    const {
        num1,
        num2
    } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            error: 'Invalid input. Please provide valid numbers.'
        });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({
        result
    });
});

// Subtraction 
app.get('/subtract', (req, res) => {
    const {
        num1,
        num2
    } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            error: 'Invalid input. Please provide valid numbers.'
        });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({
        result
    });
});

// Multiplication 
app.get('/multiply', (req, res) => {
    const {
        num1,
        num2
    } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            error: 'Invalid input. Please provide valid numbers.'
        });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({
        result
    });
});

// Division 
app.get('/divide', (req, res) => {
    const {
        num1,
        num2
    } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            error: 'Invalid input. Please provide valid numbers.'
        });
    }
    if (parseFloat(num2) === 0) {
        return res.status(400).json({
            error: 'Division by zero is not allowed.'
        });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    res.json({
        result
    });
});
//--------------------------------4.1p task code--------------------------------




// Exponentiation 
app.get('/power', (req, res) => {
    const {
        base,
        exponent
    } = req.query;
    if (isNaN(base) || isNaN(exponent)) {
        return res.status(400).json({
            error: 'Invalid input. Please provide valid numbers.'
        });
    }
    const result = Math.pow(parseFloat(base), parseFloat(exponent));
    res.json({
        result
    });
});

// Square root 
app.get('/sqrt', (req, res) => {
    const {
        number
    } = req.query;
    if (parseFloat(number) < 0) {
        return res.status(400).json({
            error: 'Square root of a negative number is not allowed.'
        });
    }
    if (isNaN(number)) {
        return res.status(400).json({
            error: 'Invalid input. Please provide valid numbers.'
        });
    }
    const result = Math.sqrt(parseFloat(number));
    res.json({
        result
    });
});

// Modulo
app.get('/modulo', (req, res) => {
    const {
        dividend,
        divisor
    } = req.query;
    if (parseFloat(divisor) === 0) {
        return res.status(400).json({
            error: 'Division by zero is not allowed.'
        });
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        return res.status(400).json({
            error: 'Invalid input. Please provide valid numbers.'
        });
    }
    const result = parseFloat(dividend) % parseFloat(divisor);
    res.json({
        result
    });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal Server Error'
    });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});