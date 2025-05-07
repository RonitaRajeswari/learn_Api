import { Contact } from "../models/Contact.js";

//get all contact
export const getAllContact = async (req, res) => {
  const userContact = await Contact.find();

  if (!userContact)
    return res.json({ message: "No Contact exist", success: false });

  res.json({ message: "All Contact Fetched", userContact });
};

//create new contact
export const newContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  if (name == "" || email == "" || type == "" || phone == "")
    return res.json({ message: "All fields are required", success: false });

  let saveContact = await Contact.create({ name, email, phone, type, user:req.user});

  res.json({
    message: "Contact saved successfully...",
    success: true,
    saveContact,
  });
};

// get contact by Id
export const getContactById = async (req, res) => {
  const id = req.params.id;

  const userContact = await Contact.findById(id);
  if (!userContact)
    return res.json({ message: "no contact find", success: false });

  res.json({ message: "contact fetched", success: true, userContact });
};

//export const update contact
export const updateContactById = async (req, res) => {
  const id = req.params.id;
  const { name, email, phone, type } = req.body;

  let updatedContact = await Contact.findByIdAndUpdate(id, {
    name,
    email,
    phone,
    type,
  },
  {new: true}
);
    if(!updatedContact) return res.json({message:"no contact exist", success:false})
  res.json({ message: "contact updated", success: true, updatedContact });
};


//export const delet contact
export const deleteContactById = async (req, res) => {
    const id = req.params.id;
  
    let deleteContact = await Contact.findByIdAndDelete(id)

    if(!deleteContact) return res.json({message:"no contact exist", success:false})

    res.json({ message: "contact deleted successfully", success: true, updatedContact });
  };
   

  // get contact by userId
export const getContactByUserId = async (req, res) => {
    const id = req.params.id;
  
    const userContact = await Contact.find({user: id});
    if (!userContact)
      return res.json({ message: "no contact find", success: false });
  
    res.json({ message: "user specific contact fetched", success: true, userContact });
  };