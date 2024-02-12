import React, { useState } from 'react';

const Schedule = () => {
  // Data jadwal dengan nama dosennya
  const schedule = [
    { id: 1, day: 'Senin', course: 'Sistem Operasi', location: 'B.102 | T.Kom', time: '11:30 - 13:10', credits: 2.0, lecturers: ['Prof. Dr. Ir. R. Rizal Isnanto, S.T., M.M., M.T., IPU, ASEAN Eng.', 'Adnan Fauzi, S.T., M.Kom.'] },
    { id: 2, day: 'Senin', course: 'Matematika Diskrit', location: 'B.101 | T. KOM', time: '14:10 - 16:40', credits: 3.0, lecturers: ['Kuntoro Adi Nugroho, S.T., M.Eng.', 'Arseto Satriyo Nugroho, S.T., M.Eng.'] },
    { id: 3, day: 'Selasa', course: 'Switching, Routing dan Jaringan Nirkabel', location: 'B.101 | T. KOM', time: '07:50 - 10:20', credits: 3.0, lecturers: ['Adnan Fauzi, S.T., M.Kom.', 'Bellia Dwi Cahya Putri, S.T., M.T.'] },
    { id: 4, day: 'Selasa', course: 'Multimedia', location: 'A.202 | G. Lab. T. Kom', time: '10:40 - 12:20', credits: 2.0, lecturers: ['Dr. Oky Dwi Nurhayati, S.T., M.T.'] },
    { id: 5, day: 'Rabu', course: 'Sistem Tertanam', location: 'B.101 | T. KOM', time: '09:40 - 11:20', credits: 2.0, lecturers: ['Dania Eridani, S.T., M.Eng.'] },
    { id: 6, day: 'Kamis', course: 'Sistem Basis Data', location: 'A.202 | G. Lab. T. Kom', time: '07:50 - 09:30', credits: 2.0, lecturers: ['Rinta Kridalukmana, S.Kom., M.T., Ph.D.', 'Risma Septiana, S.T., M.Eng.'] },
    { id: 7, day: 'Kamis', course: 'Kecerdasan Buatan', location: 'B.201 | T. KOM', time: '11:30 - 14:00', credits: 3.0, lecturers: ['Prof. Dr. Ir. R. Rizal Isnanto, S.T., M.M., M.T., IPU, ASEAN Eng.', 'Kurniawan Teguh Martono, S.T., M.T.', 'Kuntoro Adi Nugroho, S.T., M.Eng.'] },
    { id: 8, day: 'Kamis', course: 'Metode Numerik', location: 'B.201 | T. KOM', time: '14:10 - 16:40', credits: 3.0, lecturers: ['Eko Didik Widianto, S.T., M.T.', 'Kurniawan Teguh Martono, S.T., M.T.'] },
    { id: 9, day: 'Jumat', course: 'Praktikum Sistem Digital', location: 'Lab. Sistem Tertanam dan Robotika', time: '07:00 - 07:50', credits: 1.0, lecturers: ['Eko Didik Widianto, S.T., M.T.', 'Dania Eridani, S.T., M.Eng.'] },
    { id: 10, day: 'Jumat', course: 'Praktikum Pengenalan Jaringan Komputer', location: 'Lab. Jaringan dan Keamanan Komputer', time: '09:00 - 09:50', credits: 1.0, lecturers: ['Prof. Dr. Adian Fatchur Rochim, S.T., M.T.', 'Bellia Dwi Cahya Putri, S.T., M.T.'] },
    { id: 11, day: 'Sabtu', course: 'Praktikum Rekayasa Perangkat Lunak', location: 'Lab. Rekayasa Perangkat Lunak', time: '09:00 - 09:50', credits: 1.0, lecturers: ['Ike Pertiwi Windasari, S.T., M.T.', 'Charisma Tubagus Setyobudhi, B.Eng., M.T.'] }
  ];

  const [currentDate] = useState(new Date()); // Menggunakan useState untuk menginisialisasi tanggal saat ini
  const [darkMode, setDarkMode] = useState(false); // State untuk mode gelap

  // Mendapatkan hari dari tanggal saat ini
  const currentDay = currentDate.toLocaleDateString('id-ID', { weekday: 'long' });
  const currentDateFormatted = currentDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  const separatedSchedule = schedule.reduce((acc, curr) => {
    acc[curr.day] = [...(acc[curr.day] || []), curr];
    return acc;
  }, {});

  return (
    <div className={`schedule-container mx-auto w-full md:px-48 px-4 ${darkMode ? 'dark' : ''} ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <h2 className={`text-3xl font-bold text-center py-4 ${darkMode ? 'text-[#D0D1D2]' : 'text-black'}`}>Jadwal Kuliah</h2>
      <p className={`text-lg mb-8 ${darkMode ? 'text-[#D0D1D2]' : ''}`}>Sekarang hari: {currentDay}, {currentDateFormatted}</p>
      <button className={`top-4 right-4 px-2 py-1 rounded-md ${darkMode ? 'bg-gray-700 text-[#D0D1D2]' : 'bg-gray-200 text-gray-800'}`} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Mode Terang' : 'Mode Gelap'}
      </button>
      {Object.keys(separatedSchedule).map(day => (
        <div key={day} className="pb-8">
          <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-[#D0D1D2]' : ''}`}>{day}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {separatedSchedule[day].map(item => (
              <div key={item.id} className={`bg-gray-100 hover:bg-gray-300 rounded p-4 flex items-center ${darkMode ? 'dark:bg-[#1C1F23] dark:hover:bg-[#1b2b3b]' : ''}`}>
                <div className="flex-grow">
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-[#da00e8]'}`}>{item.course}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : ''}`}>{item.location}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : ''}`}>{item.time}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : ''}`}>Dosen:</div>
                  <ul className={`list-disc list-inside ${darkMode ? 'text-gray-300' : ''}`}>
                    {item.lecturers.map((lecturer, index) => (
                      <li key={index} className={`text-sm ${darkMode ? 'text-gray-300' : ''}`}>{lecturer}</li>
                    ))}
                  </ul>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : ''}`}>{item.credits} SKS</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
