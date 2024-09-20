/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex)  {
    return knex.schema.createTable('measurements', (table) => {
    table.increments('id').primary(); // Auto-incrementing ID

    table.decimal('weight', 5, 2).notNullable(); // Weight in kg (max 999.99)
    table.decimal('height', 5, 2).notNullable(); // Height in cm (max 999.99)
    table.decimal('body_fat', 5, 2); // Body fat percentage (optional)
    table.decimal('muscle_mass', 5, 2); // Muscle mass in kg (optional)
    table.decimal('waist', 5, 2).notNullable(); // Waist measurement in cm 
    table.decimal('hip', 5, 2).notNullable(); // Hip measurement in cm 
    table.decimal('chest', 5, 2).notNullable(); // Chest measurement in cm
    table.decimal('armL', 5, 2).notNullable(); 
    table.decimal('armR', 5, 2).notNullable(); 
    table.decimal('legL', 5, 2).notNullable(); 
    table.decimal('legR', 5, 2).notNullable(); 
    table.decimal('calvesL', 5, 2).notNullable(); 
    table.decimal('calvesR', 5, 2).notNullable(); 
    table.decimal('neck', 5, 2).notNullable(); 
    
    table.timestamp('measurement_date').defaultTo(knex.fn.now()); // Date of measurement
    
    table.timestamps(true, true); // created_at and updated_at timestamps
});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex)  {
    return knex.schema.dropTable('measurements');
};