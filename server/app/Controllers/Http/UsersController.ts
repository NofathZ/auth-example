import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    let users = await User.all()
    return users
  }

  public async store({ request, response }: HttpContextContract) {
    let validateFormat = await schema.create({
      username: schema.string(),
      password: schema.string(),
    })

    try {
      let validated = await request.validate({
        schema: validateFormat,
      })
      await User.create(validated)
      return response.status(200).json({
        message: "Input successfully",
      })
    }
    catch (error) {
      return response.status(400).json({
        message: "Something error"
      })
    }
  }

  public async login({ request, response, auth }: HttpContextContract) {
    
    const username = request.input('username')
    const password = request.input('password')

    try{
      const token = await auth.use('api').attempt(username, password)
      return response.status(200).json({
        token: token
      })
    }
    catch(err) {
      return response.status(400).json({
        message: err.message
      })
    } 

    
  }
}
