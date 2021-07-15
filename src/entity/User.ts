import {Entity, PrimaryGeneratedColumn, Column,BaseEntity,CreateDateColumn,UpdateDateColumn} from "typeorm";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable: true})
    firstName:string;

    @Column({nullable: true})
    lastName:string;

    @Column({nullable: true})
    email:string;

    @Column({nullable: true})
    password:string;

    // @Column()
    // @CreateDateColumn()
    // createdAt:{
    //     type:Date,
    //     default:""
    // };

    // @Column()
    // @UpdateDateColumn()
    // updateAt:{type:Date,default:""};

     setPassword=(password:string)=>{
        this.password = bcrypt.hashSync(password,8);
        return this.password;
    };
    isValidPassword=(password:string)=>{
        return bcrypt.compareSync(password,this.password);
    }
    generateJWT=()=>{
        return jwt.sign(
            {
                email:this.email,
            },
            "SECRET",
            {expiresIn:"1h"}
        )
    }

}
