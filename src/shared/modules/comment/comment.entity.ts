import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { RentalOfferEntity } from '../offer/index.js';
import { UserEntity } from '../user/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface CommentEntity extends defaultClasses.Base { }

@modelOptions({
  schemaOptions: {
    collection: 'comments'
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true })
  public text: string;

  @prop({
    red: RentalOfferEntity,
    required: true
  })
  public offerId: Ref<RentalOfferEntity>;

  @prop({
    red: UserEntity,
    required: true,
  })
  public userId: Ref<RentalOfferEntity>;

  @prop()
  public rating: number;
}

export const CommentModel = getModelForClass(CommentEntity);
