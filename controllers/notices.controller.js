import { noticeModel } from "../models/notices.model.js";

// Create Notice
export const createNotice = async(req, res) => {
    try {
        let notice = req.body;
        let newNotice = await noticeModel.create(notice);
        newNotice = newNotice.toJSON();
        return res.send({
            error:false,
            message: 'Notice created successfully!',
            data: newNotice
        });
    } catch (error) {
        return res.status(400).send({
            error:true,
            message: 'Something went wrong!'
        });
    }
}

// All Notices
export const getAllNotices = async (req, res) => {
    try {
        let notices = await noticeModel.find();
        return res.send({
            error:false,
            data: notices
        });
    } catch (error) {
        return res.status(400).send({
            error:true,
            message: 'Something went wrong!'
        });
    }
}