import React from "react";
import Image from "next/image";
import Link from "next/link";

const Mv = () => {
    return (
        <section
            id="mvSection"
            className="mv__wrap section score5 center bg-blue"
        >
            <h3>뮤직비디오 구경하기</h3>
            <p>
                음악의 감동을 두배로! 영상으로 즐기는 음악! 뮤직비디오를
                감상해보세요.
            </p>
            <div className="mv__inner container">
                <div className="mv__btn">
                    <ul>
                        <li>
                            <Link href="/" className="active">
                                K-pop
                            </Link>
                        </li>
                        <li>
                            <Link href="/">Pop</Link>
                        </li>
                        <li>
                            <Link href="/">Hip-hop</Link>
                        </li>
                        <li>
                            <Link href="/">R&B</Link>
                        </li>
                    </ul>
                </div>
                <div className="mv__conts">
                    <div className="mv">
                        <figure className="mv__header">
                            <Link href="https://www.youtube.com/watch?v=7HDeem-JaSY">
                                <Image
                                    width={410}
                                    height={230}
                                    src="/assets/images/mv/mv01.svg"
                                    alt="아이들"
                                />
                            </Link>
                        </figure>
                        <div className="mv__body">
                            <div className="pic">
                                <Image
                                    width={50}
                                    height={47}
                                    src="/assets/images/mv/mv01_01.svg"
                                    alt="아이들"
                                />
                            </div>
                            <div className="title">
                                <h4>(여자)아이들((G)I-DLE) - 퀸카</h4>
                                <span>조회수 9543만회 · 2주 전</span>
                            </div>
                        </div>
                    </div>
                    <div className="mv">
                        <figure className="mv__header">
                            <Link href="https://www.youtube.com/watch?v=Os_heh8vPfs">
                                <Image
                                    width={410}
                                    height={230}
                                    src="/assets/images/mv/mv02.svg"
                                    alt="에스파"
                                />
                            </Link>
                        </figure>
                        <div className="mv__body">
                            <div className="pic">
                                <Image
                                    width={50}
                                    height={47}
                                    src="/assets/images/mv/mv02_01.svg"
                                    alt="에스파"
                                />
                            </div>
                            <div className="title">
                                <h4>aeapa 에스파 ‘Spicy’ MV</h4>
                                <span>조회수 7976만회 · 3주 전</span>
                            </div>
                        </div>
                    </div>
                    <div className="mv">
                        <figure className="mv__header">
                            <Link href="https://www.youtube.com/watch?v=6ZUIwj3FgUY">
                                <Image
                                    width={410}
                                    height={230}
                                    src="/assets/images/mv/mv03.svg"
                                    alt="아이브"
                                />
                            </Link>
                        </figure>
                        <div className="mv__body">
                            <div className="pic">
                                <Image
                                    width={50}
                                    height={47}
                                    src="/assets/images/mv/mv03_01.svg"
                                    alt="아이브"
                                />
                            </div>
                            <div className="title">
                                <h4>IVE 아이브 ‘Kitsch’ MV</h4>
                                <span>조회수 6967만회 · 2개월 전</span>
                            </div>
                        </div>
                    </div>
                    <div className="mv">
                        <figure className="mv__header">
                            <Link href="https://www.youtube.com/watch?v=UBURTj20HXI">
                                <Image
                                    width={410}
                                    height={230}
                                    src="/assets/images/mv/mv04.svg"
                                    alt="르세라핌"
                                />
                            </Link>
                        </figure>
                        <div className="mv__body">
                            <div className="pic">
                                <Image
                                    width={50}
                                    height={47}
                                    src="/assets/images/mv/mv04_01.svg"
                                    alt="르세라핌"
                                />
                            </div>
                            <div className="title">
                                <h4>LE SSERAFIM (르세라핌) ‘UNFORGIVEN’</h4>
                                <span>조회수 7146만회 · 4주 전</span>
                            </div>
                        </div>
                    </div>
                    <div className="mv">
                        <figure className="mv__header">
                            <Link href="https://www.youtube.com/watch?v=gQlMMD8auMs">
                                <Image
                                    width={410}
                                    height={230}
                                    src="/assets/images/mv/mv05.svg"
                                    alt="블랙핑크"
                                />
                            </Link>
                        </figure>
                        <div className="mv__body">
                            <div className="pic">
                                <Image
                                    width={50}
                                    height={47}
                                    src="/assets/images/mv/mv05_01.svg"
                                    alt="블랙핑크"
                                />
                            </div>
                            <div className="title">
                                <h4>BLACKPINK - ‘Pink Venom’ M/V</h4>
                                <span>조회수 6.4억회 · 9개월 전</span>
                            </div>
                        </div>
                    </div>
                    <div className="mv">
                        <figure className="mv__header">
                            <Link href="https://www.youtube.com/watch?v=js1CtxSY38I">
                                <Image
                                    width={410}
                                    height={230}
                                    src="/assets/images/mv/mv06.svg"
                                    alt="뉴진스"
                                />
                            </Link>
                        </figure>
                        <div className="mv__body">
                            <div className="pic">
                                <Image
                                    width={50}
                                    height={47}
                                    src="/assets/images/mv/mv06_01.svg"
                                    alt="뉴진스"
                                />
                            </div>
                            <div className="title">
                                <h4>NewJeans (뉴진스) ‘Attention’ MV</h4>
                                <span>조회수 4918만회 · 10개월 전</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mv;
