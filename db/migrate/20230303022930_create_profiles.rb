class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :firstname
      t.string :lastname
      t.string :age

      t.timestamps
    end
  end
end
