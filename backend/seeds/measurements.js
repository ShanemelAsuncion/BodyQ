/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries in the table
  await knex('measurements').del();

  // Inserts seed entries
  await knex('measurements').insert([
    {
      weight: 70.5,
      height: 175.2,
      body_fat: 15.5,
      muscle_mass: 35.4,
      waist: 85.3,
      hip: 95.2,
      chest: 98.7,
      armL: 32.4,
      armR: 32.6,
      legL: 55.1,
      legR: 55.3,
      calvesL: 35.0,
      calvesR: 35.2,
      neck: 40.5,
      measurement_date: '2024-09-20'
    },
    {
      weight: 68.0,
      height: 170.1,
      body_fat: 14.0,
      muscle_mass: 34.0,
      waist: 82.0,
      hip: 93.5,
      chest: 95.0,
      armL: 31.0,
      armR: 31.2,
      legL: 54.0,
      legR: 54.5,
      calvesL: 34.0,
      calvesR: 34.5,
      neck: 39.5,
      measurement_date: '2024-09-18'
    }
  ]);
}
