import React from 'react';
import './App.css'; // File CSS untuk styling

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

  // Memisahkan jadwal berdasarkan hari
  const separatedSchedule = schedule.reduce((acc, curr) => {
    acc[curr.day] = [...(acc[curr.day] || []), curr];
    return acc;
  }, {});

  return (
    <div className="schedule-container">
      <h2>Jadwal Kuliah</h2>
      {Object.keys(separatedSchedule).map(day => (
        <div key={day}>
          <h3>{day}</h3>
          <div className="schedule">
            {separatedSchedule[day].map(item => (
              <div key={item.id} className="schedule-item">
                {/* <div className="day">{item.day}</div> */}
                <div className="details">
                  <div className="course">{item.course}</div>
                  <div className="info">
                    <div className="location">{item.location}</div>
                    <div className="time">{item.time}</div>
                    <div className="lecturers">
                      <p>Dosen:</p>
                      <ul>
                        {item.lecturers.map((lecturer, index) => (
                          <li key={index}>{lecturer}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="credits">{item.credits} SKS</div>
                  </div>
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
