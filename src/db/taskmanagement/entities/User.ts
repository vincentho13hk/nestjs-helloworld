import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Task } from "./Task";

@Index("user_pk", ["id"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "firebase_oauth_id" })
  firebaseOauthId: string;

  @Column("timestamp without time zone", { name: "create_time" })
  createTime: Date;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
