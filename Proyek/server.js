const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

// Simulasi data rekapitulasi
const rekapData = {
  kehadiran: 'Hadir: 120 hari dari 160 hari kerja',
  lembur: 'Total Lembur: 54 jam',
  cuti: 'Total Cuti: 12 hari'
};

app.get('/api/dashboard', (req, res) => {
  res.json(rekapData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
