const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  location: String,
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
</xai:function_call">

<xai:function_call name="create_file">
<parameter name="absolute_path">c:/Users/nitin/OneDrive/Desktop/campus connect + ai assistant/backend/routes/notes.js
