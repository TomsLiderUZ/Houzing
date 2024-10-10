import React from 'react';
import {
    CardItemBg,
    CardItemTopItemsBg,
    CardItemTopImgTopTitleBg_1,
    CardItemTopImgTopTitleBg_2,
    CardItemBottomItemsRowUserLogo,
    CardItemBottomItemsBg,
    CardItemBottomItemsRow_1,
    CardItemBottomItemsRow_1_Title,
    CardItemBottomItemsRow_1_About,
    CardItemBottomItemsRow_2,
    CardItemBottomItemsRow_3,
    CardItemBottomItemsRow_3LeftItmesBg,
    CardItemBottomItemsRow_3RightItmesBg,
    CardItemBottomItemsRow_3RightItmesBtnBg,
    CardItemBottomItemsRow_3_OldMony,
    CardItemBottomItemsRow_3_NewMony,
    CardItemBottomItemsRow_2_ItemBg,
    CardItemBottomItemsRow_2_ItemIcon,
    CardItemBottomItemsRow_2_ItemText,
    CardItemTopImgTopTitlesWrapper,
    CardItemTopImgTopTitlesWrapperLeftItem,
    CardItemTopImgTopTitlesWrapperRightItem,
    CardItemBottomItemsRowUserLogoWrapper
} from './style';

function Card({ id, img, logo, name, about, beds, baths, garage, sqft, oldmony, nevmony }) {
    return (
        <CardItemBg key={id}>
            <CardItemTopItemsBg style={{backgroundImage: `url("${img}")`}}>
                <CardItemTopImgTopTitlesWrapper>
                    <CardItemTopImgTopTitlesWrapperLeftItem>
                        <CardItemTopImgTopTitleBg_1>FEATURED</CardItemTopImgTopTitleBg_1>
                    </CardItemTopImgTopTitlesWrapperLeftItem>
                    <CardItemTopImgTopTitlesWrapperRightItem>
                        <CardItemTopImgTopTitleBg_2>FOR SALE</CardItemTopImgTopTitleBg_2>
                    </CardItemTopImgTopTitlesWrapperRightItem>
                </CardItemTopImgTopTitlesWrapper>
            </CardItemTopItemsBg>

            <CardItemBottomItemsRowUserLogoWrapper>
                <CardItemBottomItemsRowUserLogo>
                    <img src={logo} alt="avatar" />
                </CardItemBottomItemsRowUserLogo>
            </CardItemBottomItemsRowUserLogoWrapper>


            <CardItemBottomItemsBg>
                <CardItemBottomItemsRow_1>
                    <CardItemBottomItemsRow_1_Title>{name}</CardItemBottomItemsRow_1_Title>
                    <CardItemBottomItemsRow_1_About>{about}</CardItemBottomItemsRow_1_About>
                </CardItemBottomItemsRow_1>
                <CardItemBottomItemsRow_2>
                    <CardItemBottomItemsRow_2_ItemBg>
                        <CardItemBottomItemsRow_2_ItemIcon>
                            <img src="./public/assets/icons/bed.svg" alt="icon" />
                        </CardItemBottomItemsRow_2_ItemIcon>
                        <CardItemBottomItemsRow_2_ItemText>{beds} Beds</CardItemBottomItemsRow_2_ItemText>
                    </CardItemBottomItemsRow_2_ItemBg>
                    <CardItemBottomItemsRow_2_ItemBg>
                        <CardItemBottomItemsRow_2_ItemIcon>
                            <img src="./public/assets/icons/bath.svg" alt="icon" />
                        </CardItemBottomItemsRow_2_ItemIcon>
                        <CardItemBottomItemsRow_2_ItemText>{baths} Baths</CardItemBottomItemsRow_2_ItemText>
                    </CardItemBottomItemsRow_2_ItemBg>
                    <CardItemBottomItemsRow_2_ItemBg>
                        <CardItemBottomItemsRow_2_ItemIcon>
                            <img src="./public/assets/icons/car.svg" alt="icon" />
                        </CardItemBottomItemsRow_2_ItemIcon>
                        <CardItemBottomItemsRow_2_ItemText>{garage} Garage</CardItemBottomItemsRow_2_ItemText>
                    </CardItemBottomItemsRow_2_ItemBg>
                    <CardItemBottomItemsRow_2_ItemBg>
                        <CardItemBottomItemsRow_2_ItemIcon>
                            <img src="./public/assets/icons/ruler.svg" alt="icon" />
                        </CardItemBottomItemsRow_2_ItemIcon>
                        <CardItemBottomItemsRow_2_ItemText>{sqft} Sq Ft</CardItemBottomItemsRow_2_ItemText>
                    </CardItemBottomItemsRow_2_ItemBg>
                </CardItemBottomItemsRow_2>
                <CardItemBottomItemsRow_3>
                    <CardItemBottomItemsRow_3LeftItmesBg>
                        <CardItemBottomItemsRow_3_OldMony>${oldmony}/mo</CardItemBottomItemsRow_3_OldMony>
                        <CardItemBottomItemsRow_3_NewMony>${nevmony}/mo</CardItemBottomItemsRow_3_NewMony>
                    </CardItemBottomItemsRow_3LeftItmesBg>
                    <CardItemBottomItemsRow_3RightItmesBg>
                        <CardItemBottomItemsRow_3RightItmesBtnBg>
                            <img src="./public/assets/icons/resize.svg" alt="icon" />
                        </CardItemBottomItemsRow_3RightItmesBtnBg>
                        <CardItemBottomItemsRow_3RightItmesBtnBg className="C-C-U-B-E-C-B-I-R-3-R-I-B-B__2">
                            <img src="./public/assets/icons/love.svg" alt="icon" />
                        </CardItemBottomItemsRow_3RightItmesBtnBg>
                    </CardItemBottomItemsRow_3RightItmesBg>
                </CardItemBottomItemsRow_3>
            </CardItemBottomItemsBg>
        </CardItemBg>
    );
}

export default Card;
