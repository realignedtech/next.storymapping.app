---
title: 'Admin Guide'
description: 'Administrator guide for deploying and managing Advanced Story Maps across your organization'
---

# Admin Guide

This guide is designed for Jira administrators responsible for deploying, configuring, and managing Advanced Story Maps across their organization. Learn how to set up the app, configure organizational policies, and ensure optimal performance for your teams.

## Installation and Initial Setup

### Installing Advanced Story Maps

**Prerequisites:**
- Jira Cloud instance with admin privileges
- Active Atlassian Marketplace account
- Understanding of Jira project structure and permissions

**Installation Steps:**
1. **Navigate to Marketplace**: Go to Jira Administration → Find new apps
2. **Search for App**: Search "Advanced Story Maps" in the marketplace
3. **Install App**: Click "Get it now" and complete the installation process
4. **License Verification**: Confirm license assignment and user limits
5. **Initial Configuration**: Complete the setup wizard

### Post-Installation Configuration

**Global Settings:**
- Configure default app preferences
- Set up organizational branding
- Establish security policies
- Configure integration settings

**User Access:**
- Assign app licenses to users
- Configure user groups
- Set up role-based permissions
- Test access levels

## License Management

### Understanding Licensing

**License Types:**
- **Named User License**: Assigned to specific users
- **Concurrent User License**: Shared pool for multiple users
- **Site License**: Unlimited users for large organizations

**License Allocation:**
- Automatic assignment based on Jira users
- Manual license assignment
- License reclamation from inactive users
- Bulk license operations

### License Administration

**User Management:**
- Add/remove licensed users
- Monitor license usage
- Generate usage reports
- Handle license conflicts

**Cost Optimization:**
- Regular license audits
- Inactive user cleanup
- Usage pattern analysis
- Right-sizing recommendations

## Project Configuration

### Enabling Projects

**Project Selection:**
- Choose which projects can use Advanced Story Maps
- Configure project-specific settings
- Set up project templates
- Establish governance policies

**Bulk Configuration:**
- Enable multiple projects simultaneously
- Apply consistent settings across projects
- Import/export project configurations
- Template-based project setup

### Project-Level Settings

**Default Configurations:**
- Story map templates
- Default swimlane configurations
- Export settings and preferences
- Integration parameters

**Customization Options:**
- Project-specific themes
- Custom field mappings
- Board connection preferences
- Notification settings

## User Management and Permissions

### Role-Based Access Control

**Admin Roles:**
- **System Administrator**: Full app configuration access
- **Project Administrator**: Project-level management
- **Team Lead**: Map management and user oversight
- **End User**: Standard story mapping functionality

**Permission Matrix:**

| Function | System Admin | Project Admin | Team Lead | End User |
|----------|--------------|---------------|-----------|----------|
| Install/Configure App | ✅ | ❌ | ❌ | ❌ |
| Manage Licenses | ✅ | ❌ | ❌ | ❌ |
| Project Settings | ✅ | ✅ | ❌ | ❌ |
| Create Maps | ✅ | ✅ | ✅ | ✅ |
| Manage Team Maps | ✅ | ✅ | ✅ | ❌ |
| Export Data | ✅ | ✅ | ✅ | ⚙️* |

*⚙️ = Configurable by admin

### User Onboarding

**New User Setup:**
- Automated license assignment
- Welcome email templates
- Training resource links
- Initial configuration assistance

**Training Programs:**
- Basic user training materials
- Advanced feature workshops
- Admin certification programs
- Community support resources

## Security and Compliance

### Data Security

**Data Protection:**
- Data encryption in transit and at rest
- Access logging and audit trails
- Privacy policy compliance
- GDPR and regional compliance

**Security Configurations:**
- IP whitelist management
- Single sign-on integration
- Two-factor authentication support
- Session management policies

### Compliance Requirements

**Industry Standards:**
- SOC 2 Type II compliance
- ISO 27001 certification
- HIPAA compliance (where applicable)
- Regional data protection laws

**Audit Support:**
- Comprehensive audit logs
- User activity tracking
- Data access reports
- Compliance documentation

## Performance Optimization

### System Performance

**Monitoring Tools:**
- Performance dashboard
- Usage analytics
- System health indicators
- Resource utilization tracking

**Optimization Strategies:**
- Cache configuration
- Database optimization
- API rate limiting
- Resource allocation tuning

### Scalability Planning

**Capacity Management:**
- User growth planning
- Data volume projections
- Performance benchmarking
- Infrastructure scaling

**Performance Tuning:**
- Query optimization
- Index management
- Memory allocation
- Network optimization

## Integration Management

### Jira Integration

**Board Management:**
- Centralized board configuration
- Board performance monitoring
- Integration health checks
- Troubleshooting tools

**Custom Field Configuration:**
- Global custom field mappings
- Field standardization policies
- Custom field validation
- Migration assistance

### Third-Party Integrations

**Supported Integrations:**
- Advanced Roadmaps integration
- Confluence integration
- Portfolio management tools
- External analytics platforms

**Integration Security:**
- API key management
- OAuth configuration
- Integration monitoring
- Security assessment

## Backup and Disaster Recovery

### Data Backup

**Backup Strategies:**
- Automated daily backups
- On-demand backup creation
- Cross-region backup storage
- Backup validation testing

**Recovery Procedures:**
- Point-in-time recovery
- Selective data restoration
- Full system recovery
- Recovery time objectives

### Business Continuity

**Disaster Recovery:**
- Recovery planning documentation
- Failover procedures
- Communication protocols
- Testing schedules

**High Availability:**
- Redundancy configuration
- Load balancing setup
- Geographic distribution
- Uptime monitoring

## Maintenance and Updates

### Regular Maintenance

**Scheduled Tasks:**
- License usage reviews
- Performance optimization
- Security updates
- Data cleanup operations

**Health Monitoring:**
- System status checks
- User experience monitoring
- Error rate tracking
- Performance benchmarking

### Update Management

**App Updates:**
- Update notification system
- Staged deployment process
- Rollback procedures
- Change communication

**Version Management:**
- Update testing procedures
- Feature rollout planning
- User training updates
- Documentation maintenance

## Troubleshooting and Support

### Common Issues

**Installation Problems:**
- License activation issues
- Permission configuration errors
- Integration connectivity problems
- Performance degradation

**User Issues:**
- Access permission problems
- Data synchronization errors
- Export functionality issues
- Browser compatibility problems

### Support Resources

**Internal Support:**
- Admin documentation library
- Troubleshooting guides
- Best practices documentation
- FAQ resources

**External Support:**
- Vendor support channels
- Community forums
- Professional services
- Training programs

### Escalation Procedures

**Issue Classification:**
- Critical: System down or major functionality lost
- High: Significant functionality impacted
- Medium: Minor functionality issues
- Low: Enhancement requests or questions

**Support Process:**
1. **Initial Diagnosis**: Use built-in diagnostic tools
2. **Documentation Review**: Check troubleshooting guides
3. **Community Support**: Consult user forums
4. **Vendor Support**: Contact official support channels
5. **Professional Services**: Engage for complex issues

## Reporting and Analytics

### Usage Analytics

**User Activity Reports:**
- Login frequency and patterns
- Feature utilization statistics
- Map creation and usage metrics
- Export activity tracking

**Performance Metrics:**
- System response times
- Error rates and types
- Resource utilization
- User satisfaction scores

### Business Intelligence

**Dashboard Creation:**
- Executive summary dashboards
- Team productivity metrics
- Project progress tracking
- ROI measurement tools

**Data Export:**
- Raw data extraction
- Custom report generation
- Integration with BI tools
- Automated reporting

## Best Practices

### Organizational Deployment

**Phased Rollout:**
- Pilot program with select teams
- Gradual expansion to departments
- Organization-wide deployment
- Continuous feedback collection

**Change Management:**
- Executive sponsorship
- Training program development
- Communication strategies
- Success measurement

### Ongoing Management

**Regular Reviews:**
- Quarterly usage assessments
- Annual security reviews
- Performance optimization cycles
- Feature adoption analysis

**Continuous Improvement:**
- User feedback collection
- Process optimization
- Technology updates
- Best practice sharing

---

## Next Steps

- [Settings](/docs/pro/features/settings) - Configure detailed app preferences
- [Board Management](/docs/pro/features/board) - Set up organizational board policies
- [Export Features](/docs/pro/features/export) - Configure organizational export policies