import styled from 'styled-components';

export const HomeContentWrapper = styled.div`
    width: 100%;
    height: max-content;
`;

export const HomeContentTopMenu = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: left;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0 0 130px;
    position: relative;
    z-index: 900;
`;

export const HomeContentTopMenuTitleBar = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 829px;
    height: 44px;
    box-sizing: border-box;
    padding: 0 0 0 15px;
    border: 1px solid #E6E9EC;
    border-radius: 2px;
`;

export const HomeContentTopMenuTitleBarInp = styled.input`
    width: 100%;
    height: 100%;
    color: var(--bgWrapper);
    font-size: 14px;
    font-weight: 400;
    box-sizing: border-box;
    padding: 0 10px 0 9px;
`;

export const HomeContentTopMenuBtnWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    box-sizing: border-box;
    padding: 0 130px 0 0;
`;

export const HomeContentTopMenuButton = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HomeContentTopMenuButton_1 = styled.div`
    width: 131px;
    height: 44px;
    border-radius: 2px;
    border: 1px solid #E6E9EC;
    color: var(--bgWrapper);
    font-size: 14px;
    font-weight: 400;
    transition: all 0.4s linear;
`;

export const HomeContentTopMenuButton_2 = styled.div`
    width: 180px;
    height: 44px;
    border-radius: 2px;
    border: 1px solid var(--colorPrimary);
    background-color: var(--colorPrimary);
    color: white;
    font-size: 14px;
    font-weight: 400;
    margin-left: 20px;
    transition: all 0.2s linear;
`;

export const HomeContentTopCaruselWrapper = styled.div`
    width: 100%;
    height: 571px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HomeContentTopCaruselImg = styled.img`
    width: 100%;
    height: 571px;
    display: flex;
    justify-content: center;
    align-items: start;
`;

export const HomeContentTopCaruselControlsBg = styled.div`
    width: 100%;
    height: 571px;
    position: absolute;
    background: #000000A6;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HomeContentTopCaruselControlsGetNuberBtnsWarpper = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    box-sizing: border-box;
    padding: 0 0 32px 0;
`;

export const HomeContentTopCaruselControlsGetNuberButtonCirclesBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;
`;

export const HomeContentTopCaruselControlsGetUpBtnBg = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

export const Hctccgubb_1 = styled(HomeContentTopCaruselControlsGetUpBtnBg)`
    justify-content: left;
    padding: 0 0 0 32px;
`;

export const Hctccgubb_2 = styled(HomeContentTopCaruselControlsGetUpBtnBg)`
    justify-content: right;
    padding: 0 32px 0 0;
`;

export const HomeContentTopCaruselControlsGetUpButton = styled.div`
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5000px;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: all 0.3s linear;
`;

export const HomeContentTopCaruselControlsGetNuberButtonCircle = styled.div`
    width: 8px;
    height: 8px;
    background-color: white;
    border-radius: 5000px;
    cursor: pointer;
`;

export const UnicalModalWrapper = styled.div`
    position: absolute;
    z-index: 500;
    width: 920px;
    height: 409px;
    border-radius: 5px;
    background-color: white;
    margin-right: 130px;
    margin-top: 74px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    overflow: hidden;
    transition: all 0.4s linear;
`;

export const UnicalModalBottomContent = styled.div`
    width: 100%;
    height: 84px;
    background-color: #F6F8F9;
    border-top: 1px solid #E6E9EC;
    display: flex;
    justify-content: right;
    align-items: center;
    box-sizing: border-box;
    padding: 0 30px 0 0;
`;

export const UnicalModalTopContent = styled.div`
    width: 100%;
    height: 325px;
    box-sizing: border-box;
    padding: 20px 0 0 30px;
`;

export const UnicalModalTopContentRow = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: left;
    align-items: start;
    flex-wrap: wrap;
`;

export const UnicalModalTopContentRowTitleBg = styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: var(--bgWrapper);
`;

export const UnicalModalTopContentRowInpsBg = styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 10px;
    gap: 20px;
`;

export const UnicalModalTopContentRowInputItem = styled.input`
    width: 200px;
    height: 44px;
    border-radius: 2px;
    border: 1px solid #E6E9EC;
    color: var(--bgWrapper);
    font-size: 14px;
    font-weight: 400;
    box-sizing: border-box;
    padding: 0 0 0 16px;
`;

export const UnicalModalBottomContentButton = styled.div`
    width: 128px;
    height: 44px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    transition: all 0.2s linear;
`;

export const UnicalModalBottomContentButtonA = styled(UnicalModalBottomContentButton)`
    color: var  (--bgWrapper);
    border: 1px solid var(--bgWrapper);
`;

export const UnicalModalBottomContentButtonB = styled(UnicalModalBottomContentButton)`
    color: white;
    border: 1px solid var(--colorPrimary);
    background-color: var(--colorPrimary);
    margin-left: 20px;
`;

export const UnicalModalBottomContentButtonBHover = styled(UnicalModalBottomContentButtonB)`
    &:hover {
        background-color: var(--bgWrapper);
        border-color: var(--bgWrapper);
        color: white;
    }
`;

export const UnicalModalBottomContentButtonAHover = styled(UnicalModalBottomContentButtonA)`
    &:hover {
        background-color: var(--bgWrapper);
        border-color: var(--bgWrapper);
        color: white;
    }
`;

export const HomeContentTopCaruselItemImg = styled.img`
    position: absolute;
    transition: all 0.3s linear;
`;
