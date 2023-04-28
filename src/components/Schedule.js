import React, { useState } from 'react';
import './Table.css';

function Table() {
  const [showLocationTable, setShowLocationTable] = useState(true);
  const [showFestivalTable, setShowFestivalTable] = useState(false);

  return (
    <div>
      <div className="table-buttons" style={{ textAlign:'center' }}>
        <button onClick={() => { setShowLocationTable(true); setShowFestivalTable(false); }}>
          Show by Location</button>
        <button onClick={() => { setShowLocationTable(false); setShowFestivalTable(true); }}>
          Show by Festival</button>
        {showLocationTable && (
          <table>
            <thead>
              <tr>
                <th className="location" style={{ fontWeight: 'bold', fontSize: '25px', color: 'Black' }}>Location</th>
                <th className="start-date" style={{ fontWeight: 'bold', fontSize: '25px', color: 'Black' }}>Start Date</th>
                <th className="end-date" style={{ fontWeight: 'bold', fontSize: '25px', color: 'Black' }}>End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="location-cell red-bg">INDIO</td>
                <td className="start-date-cell green-bg">May 1, 2023</td>
                <td className="end-date-cell green-bg">May 7, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">CHANDLER</td>
                <td className="start-date-cell green-bg">May 10, 2023</td>
                <td className="end-date-cell green-bg">May 15, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">SURPRISE</td>
                <td className="start-date-cell green-bg">May 20, 2023</td>
                <td className="end-date-cell green-bg">May 25, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">MARICOPA</td>
                <td className="start-date-cell green-bg">May 1, 2023</td>
                <td className="end-date-cell green-bg">May 7, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">TUCSON</td>
                <td className="start-date-cell green-bg">May 10, 2023</td>
                <td className="end-date-cell green-bg">May 15, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">LOS BANOS</td>
                <td className="start-date-cell green-bg">May 20, 2023</td>
                <td className="end-date-cell green-bg">May 25, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">FRESNO</td>
                <td className="start-date-cell green-bg">May 1, 2023</td>
                <td className="end-date-cell green-bg">May 7, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">KING CITY</td>
                <td className="start-date-cell green-bg">May 10, 2023</td>
                <td className="end-date-cell green-bg">May 15, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">CHICO</td>
                <td className="start-date-cell green-bg">May 20, 2023</td>
                <td className="end-date-cell green-bg">May 25, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">STOCKTON</td>
                <td className="start-date-cell green-bg">May 1, 2023</td>
                <td className="end-date-cell green-bg">May 7, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">MERCED</td>
                <td className="start-date-cell green-bg">May 10, 2023</td>
                <td className="end-date-cell green-bg">May 15, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">PLEASANTON</td>
                <td className="start-date-cell green-bg">May 20, 2023</td>
                <td className="end-date-cell green-bg">May 25, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">CAL EXPO</td>
                <td className="start-date-cell green-bg">May 1, 2023</td>
                <td className="end-date-cell green-bg">May 7, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">SANTA ROSA</td>
                <td className="start-date-cell green-bg">May 10, 2023</td>
                <td className="end-date-cell green-bg">May 15, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">BOISE</td>
                <td className="start-date-cell green-bg">May 20, 2023</td>
                <td className="end-date-cell green-bg">May 25, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">BLACKFOOT</td>
                <td className="start-date-cell green-bg">May 1, 2023</td>
                <td className="end-date-cell green-bg">May 7, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">LODI</td>
                <td className="start-date-cell green-bg">May 10, 2023</td>
                <td className="end-date-cell green-bg">May 15, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">BAKERSFIELD</td>
                <td className="start-date-cell green-bg">May 20, 2023</td>
                <td className="end-date-cell green-bg">May 25, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">FRESNO</td>
                <td className="start-date-cell green-bg">May 1, 2023</td>
                <td className="end-date-cell green-bg">May 7, 2023</td>
              </tr>
            </tbody>
          </table>
        )}
        {showFestivalTable && (
          <table>
            <thead>
              <tr>
                <th className="location" style={{ fontWeight: 'bold', fontSize: '25px', color: 'Black' }}>Festival</th>
                <th className="start-date" style={{ fontWeight: 'bold', fontSize: '25px', color: 'Black' }}>Start Date</th>
                <th className="end-date" style={{ fontWeight: 'bold', fontSize: '25px', color: 'Black' }}>End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="location-cell red-bg">RIVERSIDE DATE FEST.</td>
                <td className="start-date-cell green-bg">May 10, 2023</td>
                <td className="end-date-cell green-bg">May 15, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">CHANDLER OSTRICH FEST.</td>
                <td className="start-date-cell green-bg">May 20, 2023</td>
                <td className="end-date-cell green-bg">May 25, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">BASES & BREWS</td>
                <td className="start-date-cell green-bg">May 1, 2023</td>
                <td className="end-date-cell green-bg">May 7, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">MARICOPA COUNTY FAIR</td>
                <td className="start-date-cell green-bg">May 10, 2023</td>
                <td className="end-date-cell green-bg">May 15, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">MERCED COUNTY SPR. FAIR</td>
                <td className="start-date-cell green-bg">May 20, 2023</td>
                <td className="end-date-cell green-bg">May 25, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">FRESNO SPRING FEST.</td>
                <td className="start-date-cell green-bg">May 1, 2023</td>
                <td className="end-date-cell green-bg">May 7, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">SALINAS VALLEY FAIR</td>
                <td className="start-date-cell green-bg">May 10, 2023</td>
                <td className="end-date-cell green-bg">May 15, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">SILVER DOLLAR FAIR</td>
                <td className="start-date-cell green-bg">May 20, 2023</td>
                <td className="end-date-cell green-bg">May 25, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">SAN JOAQUIN VALLEY FAIR</td>
                <td className="start-date-cell green-bg">May 1, 2023</td>
                <td className="end-date-cell green-bg">May 7, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">MERCED COUNTY FAIR</td>
                <td className="start-date-cell green-bg">May 10, 2023</td>
                <td className="end-date-cell green-bg">May 15, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">ALAMEDA COUNTY FAIR</td>
                <td className="start-date-cell green-bg">May 20, 2023</td>
                <td className="end-date-cell green-bg">May 25, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">CALIFORNIA STATE FAIR</td>
                <td className="start-date-cell green-bg">May 20, 2023</td>
                <td className="end-date-cell green-bg">May 25, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">SONOMA COUNTY FAIR</td>
                <td className="start-date-cell green-bg">May 1, 2023</td>
                <td className="end-date-cell green-bg">May 7, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">WESTERN IDAHO STATE FAIR</td>
                <td className="start-date-cell green-bg">May 10, 2023</td>
                <td className="end-date-cell green-bg">May 15, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">EASTERN IDAHO STATE FAIR</td>
                <td className="start-date-cell green-bg">May 20, 2023</td>
                <td className="end-date-cell green-bg">May 25, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">LODI GRAPE FESTIVAL</td>
                <td className="start-date-cell green-bg">May 20, 2023</td>
                <td className="end-date-cell green-bg">May 25, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">KERN COUNTY FAIR</td>
                <td className="start-date-cell green-bg">May 1, 2023</td>
                <td className="end-date-cell green-bg">May 7, 2023</td>
              </tr>
              <tr>
                <td className="location-cell red-bg">THE BIG FRESNO FAIR</td>
                <td className="start-date-cell green-bg">May 10, 2023</td>
                <td className="end-date-cell green-bg">May 15, 2023</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Table;