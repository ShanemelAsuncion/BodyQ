import React from 'react'
import CustomizedTables from '../CustomizedTables/CustomizedTables';

function DashboardCalories() {
    // mock data
    const foodData = [
        { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
        { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
        { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
        { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
        { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
      ];
  return (
    <div>DashboardCalories
        <CustomizedTables data={foodData} tableName={"Breakfast"} />
        <CustomizedTables data={foodData} tableName={"Lunch"} />
        <CustomizedTables data={foodData} tableName={"Dinner"} />
        <CustomizedTables data={foodData} tableName={"Others"} />
    </div>
  )
}

export default DashboardCalories