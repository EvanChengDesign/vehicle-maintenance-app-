'use strict';

class DataCollection {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    try {
      if (id) {
        const record = await this.model.findOne({ where: { id } });
        if (record) {
          // Wrap the single record in an array to ensure consistency
          return { success: true, message: 'Record found', data: [record] };
        } else {
          return { success: false, message: 'No record found with the provided ID' };
        }
      } else {
        const allRecords = await this.model.findAll({});
        return { success: true, message: 'All records retrieved', data: allRecords };
      }
    } catch (error) {
      console.error("Error fetching records:", error.message);
      return { success: false, message: 'Unable to retrieve records at this time' };
    }
  }

  async create(record) {
    try {
      const newRecord = await this.model.create(record);
      return { success: true, message: 'Record created successfully', data: newRecord };
    } catch (error) {
      console.error("Error creating record:", error.message);
      return { success: false, message: 'Unable to create record at this time' };
    }
  }

  async update(id, data) {
    try {
      const record = await this.model.findOne({ where: { id } });
      if (record) {
        const updatedRecord = await record.update(data);
        return { success: true, message: 'Record updated successfully', data: updatedRecord };
      } else {
        return { success: false, message: 'No record found with the provided ID' };
      }
    } catch (error) {
      console.error("Error updating record:", error.message);
      return { success: false, message: 'Unable to update record at this time' };
    }
  }

  async delete(id) {
    try {
      const deletedCount = await this.model.destroy({ where: { id } });
      if (deletedCount > 0) {
        return { success: true, message: 'Record deleted successfully' };
      } else {
        return { success: false, message: 'No record found with the provided ID' };
      }
    } catch (error) {
      console.error("Error deleting record:", error.message);
      return { success: false, message: 'Unable to delete record at this time' };
    }
  }
}

module.exports = DataCollection;

