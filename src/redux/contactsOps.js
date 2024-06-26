import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://6622cb103e17a3ac846dfbd6.mockapi.io/'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`)
      // console.log(response.data)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
