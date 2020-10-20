import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo";

const Resume = ({ data }) => {
    const [lang, setLang] = useState<boolean>(true);
    const { siteUrl, linkedin, github } = data.site.siteMetadata;
    const photo = data.photo.childImageSharp.fixed;
    const {
        name,
        email,
        phone,
        phone2,
        nationality,
        experience,
        education,
        certifications,
        skill,
        tools,
        birth,
        gender,
        religion,
        status,
        warga, 
        alamat,
        edukasi,
        prestasi,
        kemampuan
    } = data.file.childMarkdownRemark.frontmatter;

    return (
        <>
            <SEO title="Resume" />
            <div id="resume-nav">
                <Link to="/">Home</Link>
                <div>
                    <button 
                        onClick={() => setLang(true)}
                        style={{ borderColor: lang ? '#fff' : '#000' }}>
                        EN
                    </button>
                    <button 
                        onClick={() => setLang(false)}
                        style={{ borderColor: lang ? '#000' : '#fff' }}>
                        ID
                    </button>
                </div>
            </div>
            {lang ?
            <article id="resume">
                <h3>{name}</h3>
                <div className="col2">
                    <div>
                        <div>{siteUrl.substr(12)}</div>
                        <div>{email}</div>
                        <div>linkedin.com/in/{linkedin}</div>
                        <div>github.com/{github}</div>
                    </div>
                    <div>
                        <div>{nationality}</div>
                        <div>{phone}</div>
                        <div>{phone2}</div>
                    </div>
                </div>
                <h4>Education</h4>
                {education.map(edu => {
                    return (
                        <div>
                            <div>{edu.inst}</div>
                            <div>{edu.cert}</div>
                            <div>{edu.year}</div>
                            <div>{edu.note}</div>
                        </div>
                    );
                })}
                <div className="col2">
                    <div>
                        <h4>Skills</h4>
                        <ul>{
                            skill.map(sk => {
                                return <li>{sk}</li>
                            })
                        }</ul>
                    </div>
                    <div>
                        <h4>Tools</h4>
                        <ul>{
                            tools.map(tool => {
                                return <li>{tool}</li>
                            })
                        }</ul>
                    </div>
                </div>
                <div className="col2">
                    <div>
                        <h4>Awards and Certifications</h4>
                        {certifications.map(cert => {
                            return (
                                <div>
                                    <div>{cert.name}</div>
                                    <div>{cert.org}</div>
                                    <div>{cert.year}</div>
                                    <div>{cert.note}</div>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <h4>Experience</h4>
                        {experience.map(exp => {
                            return (
                                <div>
                                    <div>{exp.org}</div>
                                    <div>{exp.role}</div>
                                    <div>{exp.year}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </article>
            :
            <article id="resume-id">
                <div className="col2">
                    <div>
                        <h3>{name}</h3>
                        <table>
                            <tbody>
                                
                                <tr>
                                    <td>Tempat, Tanggal Lahir</td>
                                    <td>{birth}</td>
                                </tr>
                                <tr>
                                    <td>Jenis Kelamin</td>
                                    <td>{gender}</td>
                                </tr>
                                <tr>
                                    <td>Agama</td>
                                    <td>{religion}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <td>Kewarganegaraan</td>
                                    <td>{warga}</td>
                                </tr>
                                <tr>
                                    <td>Telepon</td>
                                    <td>{phone}</td>
                                </tr>
                                <tr>
                                    <td>Situs</td>
                                    <td>{siteUrl.substr(12)}</td>
                                </tr>
                                <tr>
                                    <td>LinkedIn</td>
                                    <td>linkedin.com/in/{linkedin}</td>
                                </tr>
                                <tr>
                                    <td>E-mail</td>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <td>Alamat</td>
                                    <td>{alamat}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Img fixed={photo} />
                </div>
                <h4>Pendidikan Formal</h4>
                {edukasi.map(edu => {
                    return (
                        <div>
                            <div>{edu.inst}</div>
                            <div>{edu.cert}</div>
                            <div>{edu.year}</div>
                            <div>{edu.note}</div>
                        </div>
                    );
                })}
                <h4>Keterampilan</h4>
                <ul>{
                    kemampuan.map(skill => {
                        return <li>{skill}</li>;
                    })
                }</ul>
                <h4>Prestasi</h4>
                {prestasi.map(cert => {
                    return (
                        <div>
                            <div>{cert.name}</div>
                            <div>{cert.org}</div>
                            <div>{cert.year}</div>
                            <div>{cert.note}</div>
                        </div>
                    );
                })}
            </article>
            }
        </>
    );
}

export default Resume;

export const resumeQuery = graphql`
    query {
        site {
            siteMetadata {
                siteUrl
                linkedin
                github
            }
        }
        file (
            relativePath: { eq: "resume.md" }
        ) {
            childMarkdownRemark {
                frontmatter {
                    name
                    email
                    phone
                    phone2
                    nationality
                    experience {
                        org
                        role
                        year
                    }
                    education {
                        inst
                        cert
                        year
                        note
                    }
                    certifications {
                        name
                        org
                        year
                        note
                    }
                    skill
                    tools
                    birth
                    gender
                    religion
                    warga
                    status
                    alamat
                    edukasi {
                        inst
                        cert
                        year
                        note
                    }
                    prestasi {
                        name
                        org
                        year
                        note
                    }
                    kemampuan
                }
            }
        }
        photo:
            file (
                relativePath: { eq: "resume.jpg" }
            ) {
                childImageSharp {
                    fixed(width: 180) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
    }
`