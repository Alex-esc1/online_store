const uuid = require ('uuid')
const path = require ('path');
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require ('../error/ApiError')


class DeviceController {
    async create (req, res) {
        try {
        let {name, price, brandId, typeId, info} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const device = await Device.create ({name, price, brandId, typeId, img: fileName})

        if (info) {
            info = JSON.parse(info)
            info.forEach(i =>
                DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id
                })
                )
        }

        return res.json(device)
        } catch (e) {
            next(ApiError.badReguest(e.message))
        }

    }
    async getAll (req, res) {
        const {brandId, typeId, limit, page} = req.query
        page = page || 1 // если не указана страница, по дефолту будет первая
        limit = limit || 9 //по 9-ть устройств на одной странице
        let offset = page * limit - limit // реализация отступа товаров, по сути 2*9-9 на второй странице получаем остальные 9 устройств
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }
    async getOne (req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            
            },
        )
        return res.json(device)
    }
}

module.exports = new DeviceController ()