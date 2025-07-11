const mongoose = require('mongoose');
const reportSchema = mongoose.Schema(
    {
        reportType: {
            type: String,
            enum: ['dailt_sales','monthly_sales', 'most_ordered_dishes'],
            required: true

        },
        reportDate: {
            type: Date,
            required: true,
            unique: true
        },
        data: {
            type: mongoose.Schema.Types.Mixed,
            require: true
        },
        generatedBy: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        periodStart: {type: Date},
        periodEnd: {type: Date},

    },
    {
        timestamps: true,   
    }
);


// Compound unique index to prevent duplicate reports
reportSchema.index({ reportType: 1, reportDate: 1 }, { unique: true }); 

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;