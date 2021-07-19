import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("Task_pkey", ["id"], { unique: true })
@Entity("Task", { schema: "public" })
export class Task {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title" })
  title: string;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @Column("boolean", { name: "status" })
  status: boolean;

  @Column("timestamp without time zone", { name: "create_time" })
  createTime: Date;

  @Column("timestamp without time zone", {
    name: "update_time",
    nullable: true,
  })
  updateTime: Date | null;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
